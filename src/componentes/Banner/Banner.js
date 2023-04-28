import './Banner.css'
function Banner(){
    //JSX - Parece html, mas nao é, é jsx. jsx é como o react le e transforma em elementos no dom
    return (
        <header className="banner">
        <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
    </header>
    )
}

export default Banner