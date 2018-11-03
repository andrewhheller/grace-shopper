import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPagedProducts, getProductCountByCategory, getProductCount } from './../../store';
import { getPageNum, generatePager } from './../../utils';
import Products from './Products';
import Paginator from './../Paginator';

class PagedProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: this.props.category ? this.props.category : '',
        }
    }

    componentDidMount(){
        const { index, category} = this.props;
        category === "All" ? this.props.getProductCount() : this.props.getProductCountByCategory(category)
        this.props.getPagedProducts(index, category)
        this.setState = {
            category
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.index !== this.props.index){
            this.props.getPagedProducts(this.props.index, this.props.category)
        }
    }

    render() {
        const { index, products, productCount, totalPages } = this.props
        const { category } = this.state
        const pageLimit = 10;
        let pageNum;
        if(productCount !== 0 && productCount.count.count > pageLimit){
            pageNum = totalPages(productCount.count.count, pageLimit)
        }
        if(!products){
            return null;
        }
        return (
            <div>
                <Products category={category} products={products}/>
                {productCount !== 0 && productCount.count.count > pageLimit && 
                    <Paginator count={pageNum} page={index} category={category}/>
                }
            </div>
            
        );
    }
}

const mapStateToProps = ({products, productCount}, {match}) => {
    const index = match.params.index*1;
    const category = match.params.categories;
    return {
        category,
        totalPages: (productsCount, pageLimit) => getPageNum(productsCount, pageLimit),
        index,
        products,
        productCount,
        generatePager: (pageNum, index) => generatePager(pageNum, index)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPagedProducts: (index, category) => dispatch(getPagedProducts(index, category)),
        getProductCountByCategory: (category) => dispatch(getProductCountByCategory(category)),
        getProductCount: () => dispatch(getProductCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagedProducts);