export const DATA_TEXT = [
    {
        title: 'Componentes',
        description: 'Os componentes são os blocos de construção dos aplicativos React. Um componente é um módulo independente (HTML + CSS + JS opcional) que renderiza alguma saída.',
        code: `function BemVindo() {
    return <h1>Hello, World!</h1>;
}`
    },
    {
        title: 'Jsx',
        description: 'JSX é uma extensão de sintaxe para JavaScript. É semelhante a uma linguagem de modelo, mas possui todo o poder do JavaScript (por exemplo, pode gerar conteúdo dinâmico).',
        code: `<div>
        <h1>Bem vindo {userName}</h1>
        <p>Hora de estudar React!</p>
</div>
        `
    },
    {
        title: 'Props',
        description: 'Os componentes aceitam entradas arbitrárias chamadas props. Eles são como argumentos de função.',
        code: `function BemVindo (props) {
            return <h1>Olá, {props.name}</h1>;
}`
    },
    {
        title: 'State',
        description: 'O State permite que os componentes do React mudem sua saída ao longo do tempo em resposta às ações do usuário, respostas da rede e qualquer outra coisa.',
        code: `function Counter() {
            const [isVisible, setIsVisible] = useState(false);
          
            function handleClick( )  { 
                    setIsVisible(true);
            }
          
            return (
              <div>
                    <button onClick={handleClick}>Mostrar Detalhes</button>
                    {isVisible && <p>Detalhes incríveis!</p>}
              </div>
            )
}`
    }
]