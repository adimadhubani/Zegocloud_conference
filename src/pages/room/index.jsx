import React, { useState, useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import "./RoomPage.css";

const RoomPage = () => {
  const { roomId } = useParams();
  const [userName, setUserName] = useState("");
  const [showNameModal, setShowNameModal] = useState(true);
  const [participantCount, setParticipantCount] = useState(0);
  const [meetingTime, setMeetingTime] = useState(0);
  const timerRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    if (!showNameModal) {
      document.body.style.overflow = "hidden";
      startTimer();
    }
    return () => {
      document.body.style.overflow = "auto";
      clearInterval(timerRef.current);
    };
  }, [showNameModal]);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setMeetingTime(prev => prev + 1);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const initializeMeeting = async () => {
    if (!userName.trim()) return;
    
    // const appID = 306109756;
    // const serverSecret = "1d1814e392127ebaad7b6957ff606d73";
    // const serverSecret=import.meta.env.SERVERSECRET

    const appID = Number(import.meta.env.VITE_ZEGO_APP_ID)
  const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;
  console.log(appID)
    console.log(serverSecret)
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      userName
    );
    
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: videoContainerRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showPreJoinView: false,
      layout: "Auto",
      showLeavingView: false,
      onUserAvatarSetter: (userInfo) => {
        return userInfo.userName.charAt(0).toUpperCase();
      },
      onUserCountUpdated: (count) => {
        setParticipantCount(count);
      },
    });
    
    setShowNameModal(false);
  };

  return (
    <div className="room-container">
      {/* Name Input Modal */}
      {showNameModal && (
        <div className="name-modal-overlay">
          <div className="name-modal">
            <h2>Enter Your Name</h2>
            <p>This name will be displayed during the meeting</p>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your name"
              className="name-input"
              maxLength="20"
            />
            <button 
              onClick={initializeMeeting}
              className="join-button"
              disabled={!userName.trim()}
            >
              Join Meeting
            </button>
          </div>
        </div>
      )}

      {/* Meeting UI */}
      {!showNameModal && (
        <>
          {/* Header Controls */}
          <div className="room-header">
            <div className="room-info">
              <span className="room-id">Room: {roomId}</span>
              <span className="user-name-display">👤 {userName}</span>
              <button 
                className="copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText(roomId);
                  alert("Room ID copied to clipboard!");
                }}
              >
                📋 Copy ID
              </button>
            </div>
            <div className="header-controls">
              <button className="control-btn" title="Toggle microphone">
                🎤
              </button>
              <button className="control-btn" title="Toggle camera">
                📷
              </button>
              <button className="control-btn" title="Screen share">
                🖥️
              </button>
              <button 
                className="leave-btn"
                onClick={() => window.location.href = "/"}
              >
                🚪 Leave
              </button>
            </div>
          </div>

          {/* Main Video Container */}
          <div className="video-container" ref={videoContainerRef} />

          {/* Footer Controls */}
          <div className="room-footer">
            <div className="participant-count">
              👥 <span>{participantCount}</span> participants
            </div>
            <div className="footer-controls">
              <button className="footer-btn" title="Chat">
                💬 Chat
              </button>
              <button className="footer-btn" title="Participants">
                👥 Participants
              </button>
              <button className="footer-btn" title="Settings">
                ⚙️ Settings
              </button>
            </div>
            <div className="timer">
              🕒 {formatTime(meetingTime)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RoomPage;