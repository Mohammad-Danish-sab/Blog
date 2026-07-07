import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBlog extends Struct.ComponentSchema {
  collectionName: 'components_shared_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    author: Schema.Attribute.Relation<'oneToOne', 'api::author.author'>;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    content: Schema.Attribute.Blocks;
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    excerpt: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    seoDescription: Schema.Attribute.String;
    seoTitle: Schema.Attribute.String;
    tags: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSiteSetting extends Struct.ComponentSchema {
  collectionName: 'components_shared_site_settings';
  info: {
    displayName: 'site Setting';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    footerDescription: Schema.Attribute.Blocks;
    github: Schema.Attribute.String;
    heroButtonLink: Schema.Attribute.String;
    heroButtonText: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heroSubtitle: Schema.Attribute.Blocks;
    herotitle: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    phone: Schema.Attribute.String;
    WebsiteName: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.blog': SharedBlog;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.site-setting': SharedSiteSetting;
      'shared.slider': SharedSlider;
    }
  }
}
