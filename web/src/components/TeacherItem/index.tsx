import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/7153294?u=e2c8702b069c4b3129b30a9107a3e996dad51c1e&v=4"
          alt="Bruno Lombardi"
        />
        <div>
          <strong>Bruno Lombardi</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Devorador de números e cálculos matemáticos. Apaixonado por fazer contas
        e ensinar outros a dominar a arte de resolver problemas.
        <br />
        <br />
        Já ajudei pelo menos 1 pessoa à vaporizar o cérebro com números
        irracionais.
      </p>

      <footer>
        <p>
          Preço/hora: <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
