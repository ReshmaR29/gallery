// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {imageDetails, onClickThumbnail} = this.props
    const {thumbnailUrl, thumbnailAltText, isActive, id} = imageDetails
    const imageStyle = isActive ? 'clearImage' : 'hiddenImage'
    const classname = `thumbnailImg ${imageStyle}`
    return (
      <li>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={classname}
          onClick={onClickThumbnail(id)}
        />
      </li>
    )
  }
}

export default ThumbnailItem
