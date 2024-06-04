import type { Schema, Attribute } from '@strapi/strapi';

export interface MainSlider extends Schema.Component {
  collectionName: 'components_main_sliders';
  info: {
    icon: 'th-large';
    displayName: 'Slider';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    heading: Attribute.String;
    subheading: Attribute.String;
    link: Attribute.String;
    display: Attribute.Boolean;
  };
}

export interface SectionsForm extends Schema.Component {
  collectionName: 'components_sections_forms';
  info: {
    icon: 'tasks';
    description: '';
    displayName: 'form';
  };
  attributes: {
    field: Attribute.Component<'shared.field', true>;
    title: Attribute.String;
    redirect: Attribute.Boolean;
    redirectLink: Attribute.String;
    errorMessage: Attribute.String;
    successMessage: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_decoration_heroes';
  info: {
    icon: 'address-card';
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    size: Attribute.Enumeration<['sm', 'md', 'lg', 'xl', 'full']>;
    startPic: Attribute.Media<'images' | 'files' | 'videos'>;
    background: Attribute.Media<'images' | 'files' | 'videos'>;
    direction: Attribute.Enumeration<['row', 'column']>;
    contentLink: Attribute.String;
    backButton: Attribute.Boolean;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SectionsSection extends Schema.Component {
  collectionName: 'components_sections_sections';
  info: {
    icon: 'bars';
    description: '';
    displayName: 'section';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.RichText;
    display: Attribute.Boolean;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    imagePosition: Attribute.String;
    cards: Attribute.Boolean;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    icon: 'square';
    displayName: 'card';
  };
  attributes: {
    cardText: Attribute.String;
    cardImage: Attribute.Media<'images' | 'files' | 'videos', true>;
    display: Attribute.Boolean;
  };
}

export interface SharedDynamicContent extends Schema.Component {
  collectionName: 'components_shared_dynamic_contents';
  info: {
    icon: 'align-justify';
    displayName: 'dynamic content';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    pageCopy: Attribute.RichText;
    card: Attribute.Component<'shared.card', true>;
  };
}

export interface SharedField extends Schema.Component {
  collectionName: 'components_shared_fields';
  info: {
    icon: 'stream';
    description: '';
    displayName: 'field';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    type: Attribute.String & Attribute.Required;
    placeholder: Attribute.String;
    initialValue: Attribute.String;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    icon: 'file-image';
    displayName: 'image';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    icon: 'arrow-alt-circle-right';
    displayName: 'link';
  };
  attributes: {
    display: Attribute.String;
    url: Attribute.String;
    card: Attribute.Boolean;
  };
}

export interface SharedMeta extends Schema.Component {
  collectionName: 'components_shared_metas';
  info: {
    icon: 'ankh';
    displayName: 'meta';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.String;
    preventIndexing: Attribute.Boolean;
    display: Attribute.Boolean;
    data: Attribute.JSON;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    icon: 'allergies';
    description: '';
    displayName: 'Seo';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
    meta: Attribute.Component<'shared.meta', true>;
  };
}

export interface SharedSubMenus extends Schema.Component {
  collectionName: 'components_shared_sub_menus';
  info: {
    icon: 'angle-right';
    displayName: 'subMenus';
  };
  attributes: {
    itemId: Attribute.String;
    displayName: Attribute.String;
    slug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
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
