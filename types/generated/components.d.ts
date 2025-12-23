import type { Schema, Struct } from '@strapi/strapi';

export interface MainSlider extends Struct.ComponentSchema {
  collectionName: 'components_main_sliders';
  info: {
    displayName: 'Slider';
    icon: 'th-large';
  };
  attributes: {
    display: Schema.Attribute.Boolean;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    link: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionsForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_forms';
  info: {
    description: '';
    displayName: 'form';
    icon: 'tasks';
  };
  attributes: {
    errorMessage: Schema.Attribute.String;
    field: Schema.Attribute.Component<'shared.field', true>;
    redirect: Schema.Attribute.Boolean;
    redirectLink: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_decoration_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'address-card';
  };
  attributes: {
    backButton: Schema.Attribute.Boolean;
    background: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    contentLink: Schema.Attribute.String;
    direction: Schema.Attribute.Enumeration<['row', 'column']>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    links: Schema.Attribute.Component<'shared.link', true>;
    size: Schema.Attribute.Enumeration<['sm', 'md', 'lg', 'xl', 'full']>;
    startPic: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    description: '';
    displayName: 'section';
    icon: 'bars';
  };
  attributes: {
    cards: Schema.Attribute.Boolean;
    content: Schema.Attribute.RichText;
    display: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    imagePosition: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
    icon: 'square';
  };
  attributes: {
    cardImage: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    cardText: Schema.Attribute.String;
    display: Schema.Attribute.Boolean;
  };
}

export interface SharedDynamicContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_dynamic_contents';
  info: {
    displayName: 'dynamic content';
    icon: 'align-justify';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    pageCopy: Schema.Attribute.RichText;
  };
}

export interface SharedField extends Struct.ComponentSchema {
  collectionName: 'components_shared_fields';
  info: {
    description: '';
    displayName: 'field';
    icon: 'stream';
  };
  attributes: {
    initialValue: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
    icon: 'file-image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'arrow-alt-circle-right';
  };
  attributes: {
    card: Schema.Attribute.Boolean;
    display: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMeta extends Struct.ComponentSchema {
  collectionName: 'components_shared_metas';
  info: {
    displayName: 'meta';
    icon: 'ankh';
  };
  attributes: {
    content: Schema.Attribute.String;
    data: Schema.Attribute.JSON;
    display: Schema.Attribute.Boolean;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    name: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
  };
  attributes: {
    meta: Schema.Attribute.Component<'shared.meta', true>;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSubMenus extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_menus';
  info: {
    displayName: 'subMenus';
    icon: 'angle-right';
  };
  attributes: {
    displayName: Schema.Attribute.String;
    itemId: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'main.slider': MainSlider;
      'sections.form': SectionsForm;
      'sections.hero': SectionsHero;
      'sections.section': SectionsSection;
      'shared.card': SharedCard;
      'shared.dynamic-content': SharedDynamicContent;
      'shared.field': SharedField;
      'shared.image': SharedImage;
      'shared.link': SharedLink;
      'shared.meta': SharedMeta;
      'shared.seo': SharedSeo;
      'shared.sub-menus': SharedSubMenus;
    }
  }
}
