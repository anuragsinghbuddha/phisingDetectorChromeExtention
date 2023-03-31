import URLFeatureExtraction as urlfe
import requests


def test(url):
    url = input("Enter URL: ")

    pishing_level = 0

    if urlfe.havingIP(url):
        pishing_level += 1
    if urlfe.haveAtSign(url):
        pishing_level += 1
    if urlfe.getLength(url):
        pishing_level += 1
    if urlfe.getDepth(url):
        pishing_level += 1
    if urlfe.redirection(url):
        pishing_level += 1
    if urlfe.httpDomain(url):
        pishing_level += 1
    if urlfe.tinyURL(url):
        pishing_level += 1
    if urlfe.prefixSuffix(url):
        pishing_level += 1
    return pishing_level
    # if urlfe.web_traffic(url):
    #     pishing_level += 1


    # extracting domain namehttps://www.youtube.com/watch?v=6WW9odZxunk
    # domain = urlfe.domainAge(url)
    #
    #
    # if urlfe.domainAge(domain):
    #     pishing_level += 1
    # if urlfe.domainEnd(domain):
    #     pishing_level += 1

    # response = requests.get(url)
    #
    # if urlfe.iframe(response):
    #     pishing_level += 1
    # if urlfe.mouseOver(response):
    #     pishing_level += 1
    # if urlfe.rightClick(response):
    #     pishing_level += 1
    # if urlfe.forwarding(response):
    #     pishing_level += 1

if __name__=="__main__":
    url = input("Enter URL: ")
    test(url)

    print("Pishing Level: ", pishing_level)

    if pishing_level >= 5:
        print("This is a Phishing Website")

# feature extraction from HTML and JavaScript code

# print(urlfe.featureExtraction(url))