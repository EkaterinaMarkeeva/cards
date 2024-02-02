import { Card } from './components/Card/Card'
import { ImageCard } from './components/ImageCard/ImageCard'
import { CardBody } from './components/CardBody/CardBody'
import { contentBody } from './data/body'
import { imageContent } from './data/image'
import './App.css'

function App() {
  return (
    <>
      <Card>
        <ImageCard src={imageContent.src} alt={imageContent.alt} />
        <CardBody title={contentBody[0].title} text={contentBody[0].text} href={contentBody[0].href} contentLink={contentBody[0].contentLink} />
      </Card>
      <Card>
        <CardBody title={contentBody[1].title} text={contentBody[1].text} href={contentBody[1].href} contentLink={contentBody[0].contentLink} />
      </Card>
    </>
  )
}

export default App
