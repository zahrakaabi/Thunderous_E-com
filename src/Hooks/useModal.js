/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useState } from 'react';

/* ---------------------------------------- */
/*             CUSTOM MODAL HOOK            */
/* ---------------------------------------- */
function useModal() {
  // STATES
  const [openModal, setOpenModal] = useState(false);

  // TOGGLE - show/hide option
  function toggle() {
    setOpenModal((openModal) => !openModal);
  }

  /* ************* RENDERING ************* */
  return { openModal, toggle }
};

export default useModal;