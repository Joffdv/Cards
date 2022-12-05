import Image from 'next/image'

export default function Card() {
  return (
    <div>
      <div>
        <div>
          <p>
            <span>dez</span>
            <span>05</span>
          </p>
        </div>
        <h2>
          <a>Baixar</a>
        </h2>
        <ul>
          <li>
            Arquivado sob
            <span>
              <a>Atualizações de Séries</a>
            </span>
          </li>
        </ul>
        <div>
          <p>
            <Image src="" height={330} width={100} />
          </p>
        </div>
        <ul>
          <li>
            <i></i>
            <a>Deixe um comentário</a>
          </li>
        </ul>
      </div>
    </div>
  )
}