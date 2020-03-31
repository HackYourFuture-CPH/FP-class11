import React from 'react';
import Popup from 'reactjs-popup';
import './logout.style.css';

const userName = 'Servet';

export default function Logout() {
  const popupView = (closeAction) => (
    <PopupModal title="LOG OUT" closeAction={closeAction}>
      <LogoutContent>
        <LogoutActions closeAction={closeAction} />
      </LogoutContent>
    </PopupModal>
  );

  return (
    <Popup trigger={PopupTrigger} modal="true">
      {popupView}
    </Popup>
  );
}

const PopupTrigger = () => (
  <button type="submit" className="logout-button">
    LOG OUT
  </button>
);

const PopupModal = ({ closeAction, children, title }) => {
  return (
    <div className="modal">
      <button type="submit" className="close" onClick={closeAction}>
        &times;
      </button>
      <div className="header">{title}</div>
      {children}
    </div>
  );
};

const LogoutContent = ({ children }) => {
  return (
    <>
      <div className="content">
        <p>
          Hi {userName} <br />
          Do you really want to Logout ?{' '}
        </p>
      </div>
      {children}
    </>
  );
};

const LogoutActions = ({ closeAction }) => (
  <div className="actions">
    <button
      className="confirm-logout"
      type="submit"
      onClick="location.href='/login?dis=yes'"
    >
      Logout
    </button>
    <br />
    <button
      type="submit"
      className="confirm-cancel"
      onClick={() => {
        closeAction();
      }}
    >
      Cancel
    </button>
  </div>
);

// export default function Logout() {
//   return (
//     <Popup
//       trigger={
//         <button type="submit" className="logout-button">
//           {' '}
//           LOG OUT{' '}
//         </button>
//       }
//       modal
//     >
//       {(close) => (
//         <div className="modal">
//           <button type="submit" className="close" onClick={close}>
//             &times;
//           </button>
//           <div className="header"> LOG OUT </div>
//           <div className="content">
//             <p>
//               Hi {userName} <br />
//               Do you really want to Logout ?{' '}
//             </p>
//           </div>
//           <div className="actions">
//             <button
//               className="confirm-logout"
//               type="submit"
//               onClick="location.href='/login?dis=yes'"
//             >
//               Logout
//             </button>
//             <br />
//             <button
//               type="submit"
//               className="confirm-cancel"
//               onClick={() => {
//                 close();
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </Popup>
//   );
// }
