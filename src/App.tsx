import React from 'react';
import Modal, {ModalHeader, ModalBody, ModalFooter, useModal} from './components/Modal'

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div>
      <button onClick={toggle}>
        Visualizar Chamado 
      </button>

      <Modal {...{isShowing, toggle}}>
        <ModalHeader {...{toggle}}>
        Chamado: #432rd5
        </ModalHeader>
        <ModalBody>
        <form>
        <label>
        <input placeholder='Título' type="text" name="name" />
        </label>
        <textarea placeholder='Descrição'>
        </textarea>
        <label>
        <input placeholder='Prioridade' type="text" name="name" />
        </label>
        <input className='enviar' type="submit" value="Enviar" />
        </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={toggle}>
            Sair
          </button>
        </ModalFooter>        
      </Modal>
    </div>
  );
}

export default App;
