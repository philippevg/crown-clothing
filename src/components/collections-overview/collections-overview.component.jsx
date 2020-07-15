import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import './collections-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollections, selectCollectionsForPreview} from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherItemProps}) => (
                <CollectionPreview key={id} {...otherItemProps} />))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);