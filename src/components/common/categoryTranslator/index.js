import React, { Component } from 'react'
import { connect } from 'react-redux';

export const translateCategoriesString = (categories, lang) => {
    return categories.split(',').map((category) => {
        switch(category.toLowerCase()) {
            case "public":
                return (lang === 'hu') ? 'KÖZÉPÜLET' : category.toUpperCase()
            case "commercial":
                return (lang === 'hu') ? 'KERESKEDELMI' : category.toUpperCase()
            case "hotelandres":
                return (lang === 'hu') ? 'SZÁLLÁS ÉS LAKÓÉPÜLET' : "HOTEL AND RESIDANCE"
            case "industrial":
                return (lang === 'hu') ? 'IPARI' : category.toUpperCase()
            case "heritage":
                return (lang === 'hu') ? 'MŰEMLÉK' : category.toUpperCase()
            case "other":
                return (lang === 'hu') ? 'EGYÉB' : category.toUpperCase()
            default:
                return (lang === 'hu') ? 'Nem található' : "Not found"
        }
    }).map((categories) => categories.toLowerCase()).join(', ')
}

const CategoryTranslator = props => {
    let translatedCategory;
    const {category} = props

    switch(category.toLowerCase()) {
        case "public":
            translatedCategory = (props.lang==='hu') ? 'KÖZÉPÜLET ' : " "+category.toUpperCase()
            break;
        case "commercial":
            translatedCategory = (props.lang==='hu') ? 'KERESKEDELMI ' : category.toUpperCase()
            break;
        case "hotelandres":
            translatedCategory = (props.lang==='hu') ? 'SZÁLLÁS ÉS LAKÓÉPÜLET ' : "HOTEL AND RESIDANCE "
            break;
        case "industrial":
            translatedCategory = (props.lang==='hu') ? 'IPARI ' : category.toUpperCase()
            break;
        case "heritage":
            translatedCategory = (props.lang==='hu') ? 'MŰEMLÉK ' : " "+category.toUpperCase()
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

    return  <span>
        {categories.split(',').map( category => {
           return <CategoryTranslator key={category} lang={language.lang} category={category} />
        })}
    </span>


    }

}

const mapStateToProps = (state) => {
  return {
    language: state.localization
  };
};

export default (connect(mapStateToProps,{})(categoriesTranslator));
