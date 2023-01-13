import './Main.scss';

const Main = () => {
  return (
    <div className='Main'>
        <header>
            <a href='https://portfolio-rmp.vercel.app' className="logoBox" target='_blank'>
              <img src="assets/images/RedMoon_project_Logo.png" alt="RMP_logo" />
            </a>
        </header>
        <div className="leftSpace">
          <h2>Exclusive jewelry for you and your charming princess</h2>
        </div>
        <div className="rightSpace">
          <h1><span>Soul</span><br/>Radiance</h1>
        </div>
    </div>
  )
}


export { Main };