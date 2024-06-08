import React from 'react';
import { TopBar } from './TopBar';
import { ContentRowTop } from './ContentRowTop';
import { Footer } from './Footer';


export const ContentWrapper = () => {
    return (

<div id="content-wrapper" class="d-flex flex-column">
    {/* Content Wrapper */}
        <div id="content">
            {/* Main Content */}
            <TopBar />
            <ContentRowTop />
            <Footer />
            {/* End of MainContent */}
        </div>
    {/* End of Content Wrapper */}
</div>

)
}
