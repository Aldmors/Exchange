import React, {useState} from "react";
import Article from "./Article";

export default function News() {
  const [numOfArticles,setNumOfArticles] = useState(2)
  const [data,setData] = useState(
    [
      {
        author: "Aina J. Khan, Isabella Grullón Paz",
        title: "U.K. Confirms Two Cases of Omicron Coronavirus Variant - The New York Times",
        description: "The prime minister reimposed a mask mandate, saying ‘there are many things we just cannot know.’",
        url: "https://www.nytimes.com/2021/11/27/world/europe/uk-cases-omicron-covid.html",
        urlToImage: "https://static01.nyt.com/images/2021/11/27/world/27virus-briefing-UK-cases/27virus-briefing-UK-cases-facebookJumbo.jpg",
        publishedAt: "2021-11-27T18:19:04Z",
        content: "It does appear that Omicron spreads very rapidly and can be spread between people who are double vaccinated, he added. Although the science around Omicron is still new, it is a very extensive mutatio… [+1109 chars]"
      },

      {
        author: "Michael David Smith",
        title: "Titans put A.J. Brown on injured reserve - NBC Sports",
        description: "The Titans’ injured reserve list is getting crowded. Tennessee wide receiver A.J. Brown is the latest player to go on injured reserve, meaning he’s out for at least three weeks. He joins Julio Jones and Derrick Henry, among others, as Titans players currently…",
        url: "https://profootballtalk.nbcsports.com/2021/11/27/titans-put-a-j-brown-on-injured-reserve/",
        urlToImage: "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2021/11/GettyImages-1354735165-1-e1638036374405.jpg",
        publishedAt: "2021-11-27T18:10:00Z",
        content: "The Titans’ injured reserve list is getting crowded.\r\nTennessee wide receiver A.J. Brown is the latest player to go on injured reserve, meaning he’s out for at least three weeks. He joins Julio Jones… [+572 chars]"
      }
      
    ]
  )

  const generateArticles = () => {
    let articlesToShow = data.slice(0,numOfArticles)
    return articlesToShow.map((item:any,index:any) => (<Article article={item}/>))
  }

  const increaseNumOfArticles = () => {
    setNumOfArticles(numOfArticles + 1)
  }

  return (
    <div className="main news">
      {generateArticles()}
      {generateArticles()}
      {generateArticles()}
      {generateArticles()}
      {generateArticles()}
      <i className="news-showMore" onClick={increaseNumOfArticles}>Show more</i>
    </div>
  );
}
