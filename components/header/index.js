import GithubLinkIcon from './github-link-icon'
import BannerSearch from './banner-search'

const Header = () => {
  return (
    <>
      <header className="banner df sb">
        <div className="df fs">
          <GithubLinkIcon />
          <BannerSearch />
        </div>
      </header>
      <style jsx>
        {`
          .banner {
            color: hsla(0,0%,100%,.7);
            padding: 16px;
            background-color: #24292e;
          }
          svg{
            color:#fff;
          }
        `}
      </style>
    </>
    )
}


export default Header