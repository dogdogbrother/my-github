export default () => <>
  <div className="search-box">
    <input type="submit" value="Submit" className="reset-input"/>
  </div>
  <style jsx>
    {`
      .search-box{
        margin-top: 2px;
        align-items: center;
        line-height: 1.5;
        color: hsla(0,0%,100%,.7);
        width: 300px;
        padding: 0 8px;
        height: 28px;
        background-color: hsla(0,0%,100%,.125);
        border-radius: 3px;
      }
    `}
  </style>
</>