import React from "react"
import { Link } from "gatsby"

class DefaultCard extends React.Component {
render() {
  return (
    <Link to={this.props.slug} className="column is-12-mobile is-6-tablet is-4-desktop is-4-fullhd">
      <div className="card">
        <div className="card-image">
          <figure className="image is-3by2">
            <img src={this.props.thumbnail} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
            </div>
          </div>
          <div className="content">
            <p>{this.props.fullName}  {this.props.date}</p>
            <object><Link to={`/${this.props.category}`} className="button is-light" title={`Category:${this.props.category}`}>{this.props.category}</Link></object>
          </div>
        </div>
      </div>
    </Link>
    )
  }
}

export default DefaultCard
