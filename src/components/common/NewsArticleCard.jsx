const NewsArticleCard = ({ article }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{article.NewsTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{article.NewsArticleID} {article.CreatedDate} {article.NewsStatus}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{article.Headline}</Card.Subtitle>
                <Card.Text>
                    {article.NewsContent}
                </Card.Text>
                <Card.Link href="#">{article.NewsSource}</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}
export default NewsArticleCard;