import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import HomePagePreview from './preview-templates/HomePagePreview';
import ServicesIndexPagePreview from './preview-templates/services/index';
import ServicesMobilePagePreview from './preview-templates/services/mobile';
import ServicesWebPagePreview from './preview-templates/services/web';
import ServicesDevOpsPagePreview from './preview-templates/services/devops';
import ServicesPricingPagePreview from './preview-templates/services/pricing';
import ResultsPagePreview from './preview-templates/ResultsPagePreview';
import ThePrimokoDifferenceIndexPagePreview from './preview-templates/the-primoko-difference/index';
import ThePrimokoDifferenceProcessPagePreview from './preview-templates/the-primoko-difference/process';
import ThePrimokoDifferencePricingPagePreview from './preview-templates/the-primoko-difference/pricing';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('services', ServicesIndexPagePreview);
CMS.registerPreviewTemplate('services/mobile', ServicesMobilePagePreview);
CMS.registerPreviewTemplate('services/web', ServicesWebPagePreview);
CMS.registerPreviewTemplate('services/devops', ServicesDevOpsPagePreview);
CMS.registerPreviewTemplate('services/pricing', ServicesPricingPagePreview);
CMS.registerPreviewTemplate('results', ResultsPagePreview);
CMS.registerPreviewTemplate('the-primoko-difference', ThePrimokoDifferenceIndexPagePreview);
CMS.registerPreviewTemplate('the-primoko-difference/process', ThePrimokoDifferenceProcessPagePreview);
CMS.registerPreviewTemplate('the-primoko-difference/pricing', ThePrimokoDifferencePricingPagePreview);
