export type LinkItem = {
  /** Заголовок карточки */
  title: string;
  /** Описание */
  description: string;
  /** Ссылка на внешний ресурс */
  href: string;
  /** Ссылка на изображение */
  imgUrl: string;
}

export type LinksGroup = {
  /** Название группы */
  title: string;
  /** Элементы группы */
  items: LinkItem[];
}
