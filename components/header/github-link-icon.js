import { Icon } from 'antd';

const GithubLinkIcon = () => {
  return (
    <div className="github-icon">
      <a link="https://github.com/" className="link">
        <Icon type="github"/>
      </a>
      <style jsx>
      {`
        .github-icon {
          margin-right: 16px;
          line-height: 1;
          width: 32px;
          height: 32px;
        }
        .link {
          color: #fff;
          font-size: 32px;
          box-sizing: border-box;
          position: relative;
          top: -1px;
        }
      `}
      </style>
    </div>
  )  
}

export default GithubLinkIcon