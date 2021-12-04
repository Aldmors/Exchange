import requests
from bs4 import BeautifulSoup

# Setting up bs4
URL = "https://theconversation.com/uk/topics/cryptocurrency"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
articles = soup.find_all("article", class_="clearfix placed analysis published")


def get_articles():
    article_count = 0  # Counter for how much articles
    article_list = []


    for article in articles:
        formated_article = {}  # Setting up empty dict after every article
        

        # Title
        title_element = article.find("div", class_="article--header").find("h2").find("a")
        title = title_element.text.strip()

        # Artcile Url
        article_url_path = title_element["href"]
        article_url = f"https://theconversation.com/{article_url_path}".strip()

        date = article.find("header").find("time").text.strip()  # Date
        description = article.find("div", class_="content").find("span").text.strip()  # Description
        author = article.find("p", class_="byline").find("span").find("a").text.strip()  # Author
        icon_url = article.find("img")["data-src"]  # Icon url

        # Getting inside article page
        inside_page = requests.get(article_url)
        inside_soup = BeautifulSoup(inside_page.content, "html.parser")
        check_article_type = inside_soup.find("article", class_="clearfix normal-article")


        # Checking type of article based on class of article (there're 2)
        if check_article_type is not None:
            # Img from inside of article
            inside_img_url = inside_soup.find("img", class_="lazyloaded")["src"]
            inside_content_tags = inside_soup.find_all(["p", "h2"])
            inside_content_html = ""
            # Creating string based on content fo inside article
            for elem in inside_content_tags:
                if elem.name == "p":
                    inside_content_html += f"<p>{elem.text.strip()}</p>"
                elif elem.name == "h2":
                    inside_content_html += f"<h2>{elem.text.strip()}</h2>"
        else:
            # Img from inside of article
            inside_img_url = inside_soup.find("div", class_="image")["style"][22:-2]
            inside_content_tags = inside_soup.find_all(["p", "h2"])
            inside_content_html = ""
            # Creating string based on content fo inside article
            for elem in inside_content_tags:
                if elem.name == "p":
                    inside_content_html += f"<p>{elem.text.strip()}</p>"
                elif elem.name == "h2":
                    inside_content_html += f"<h2>{elem.text.strip()}</h2>"

        # Setting values to dict
        formated_article["author"] = author
        formated_article["date"] = date
        formated_article["title"] = title
        formated_article["description"] = description
        formated_article["content"] = inside_content_html
        formated_article["articleUrl"] = article_url
        formated_article["iconUrl"] = icon_url
        formated_article["imgUrl"] = inside_img_url

        # Appending dict to final list + deleting dict to avoid errors
        article_list.append(formated_article)
        del formated_article

        # Counter for how much articles should be
        article_count += 1
        if article_count == 20:
            return article_list