type Author = {
  id: string;
  name: string;
  age: number;
};

type FirebaseAuthor = Omit<Author, 'id'>;
