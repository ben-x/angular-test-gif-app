import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import Search from "components/search";
import * as actions from "redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ImageCard from "components/imageCard";
import InfiniteScroll from "react-infinite-scroll-component";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            offset: 0,
            total: 0,
            hasMore: true,
        };

        this.bindInput = this.bindInput.bind(this);
        this.searchImage = this.searchImage.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }
    searchImage() {
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=AczTVuJ5qQDXC4PrEwvS4Hr4qyNVGIGQ&q=${this.state.search}&limit=20&offset=${this.state.offset}`
        )
            .then((data) => data.json())
            .then((data) => {
                this.props.actions.fetchImages(data.data);
                this.setState({
                    offset: this.state.offset + 20,
                    total: data.pagination.total_count,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    loadMore() {
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=AczTVuJ5qQDXC4PrEwvS4Hr4qyNVGIGQ&q=${this.state.search}&limit=20&offset=${this.state.offset}`
        )
            .then((data) => data.json())
            .then((data) => {
                this.props.actions.loadMoreImages(data.data);
                this.setState({ offset: this.state.offset + 20 });
                if (this.state.offset >= this.state.total) {
                    this.setState({ hasMore: false });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    bindInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container className="main-body">
                <Search bindInput={this.bindInput} search={this.searchImage} />

                {this.props.giphys.giphysImages.length > 0 ? (
                    <InfiniteScroll
                        dataLength={this.state.offset}
                        next={this.loadMore}
                        hasMore={this.state.hasMore}
                        loader={<h4>Loading...</h4>}
                    >
                        <Row>
                            {this.props.giphys.giphysImages.map((data) => {
                                return <ImageCard key={data.id} data={data} />;
                            })}
                        </Row>
                    </InfiniteScroll>
                ) : (
                    " "
                )}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { giphys: state.giphys };
};
const mapActionToProps = (dispatch) => {
    return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapActionToProps)(Home);
