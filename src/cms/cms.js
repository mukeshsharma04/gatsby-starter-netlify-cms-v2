import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import HomePagePreview from './preview-templates/HomePagePreview';
import ServicesIndexPagePreview from './preview-templates/services/index';
import ServicesMobilePagePreview from './preview-templates/services/mobile';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('services', ServicesIndexPagePreview);
CMS.registerPreviewTemplate('mobile', ServicesMobilePagePreview);
