import React from 'react'
import styles from './deleteModal.module.css'

function DeleteModal() {
  return (
    <div className={ styles.DeleteModalContainer }>
      <div className={ styles.ModalTextContainer}>
        <h4 className= { styles.ModalText }>Está seguro que quiere eliminar la película?</h4>
      </div>
      <div className={styles.ModalButtons}>
        <button className={ styles.cancelButton }>Cancelar</button>
        <button className={ styles.confirmButton }>Confirmar</button>
      </div>
    </div>
  )
}

export default DeleteModal
