import React, { Component } from 'react'
import { connect } from 'react-redux';


const CategoryTranslator = props => {
    let translatedCategory;
    const {category} = props

    switch(category.toLowerCase()) {
        case "public":
          break;
        case "commercial":
            translatedCategory = (props.lang==='hu') ? 'KÖZÉPÜLET ' : category.toUpperCase()           
            break;
        case "hotelandres":
            translatedCategory = (props.lang==='hu') ? 'SZÁLLÁS ÉS LAKÓÉPÜLET ' : category.toUpperCase()         
            break;
        case "industrial":
            translatedCategory = (props.lang==='hu') ? 'IPARI ' : category.toUpperCase()
            break;
        case "heritage":
            translatedCategory = (props.lang==='hu') ? 'MŰEMLÉK ' : category.toUpperCase()
            break;
        case "other":
            translatedCategory = (props.lang==='hu') ? 'EGYÉB ' : category.toUpperCase()
            break;
        default:
            translatedCategory = (props.lang==='hu') ? 'Nem található' : "Not found"
    }

    return translatedCategory;
}

class categoriesTranslator extends Component {
  
    render() {
    const {categories, language} = this.props;
    
    return  <div>
        {categories.split(',').map( category => {
           return <CategoryTranslator lang={language.lang} category={category} />
        })}
    </div>

    
    }

}

const mapStateToProps = (state) => {
  return {
    language: state.localization
  };
};

export default (connect(mapStateToProps,{})(categoriesTranslator));