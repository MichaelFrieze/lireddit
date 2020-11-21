import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

/* 
If I look in migrations/.....
It infers the types so it used jsonb 
so let's fix that using type property
then deleting old migration
*/

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'text' })
  title!: string;
}
