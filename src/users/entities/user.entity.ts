import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  IsEmail,
  IsPhoneNumber,
  IsPositive,
  IsUrl,
  Min,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  @Field()
  name: string;

  @Column({ nullable: false, unique: true, type: 'varchar', length: 50 })
  @IsEmail()
  @Field()
  email: string;

  @Column({ nullable: false, unique: true, type: 'varchar', length: 10 })
  @IsPhoneNumber()
  @Field()
  phoneNumber: string;

  @Column({ nullable: false, type: 'tinyint' })
  @IsPositive()
  @Min(18)
  @Field(type => Int)
  age: number;

  @Column({ default: 0, type: 'tinyint' })
  @IsPositive()
  @Field(type => Int)
  experience: number;

  @Column()
  @Field()
  @IsUrl()
  pictureUrl: string;

  @Column({ nullable: false })
  @Field()
  description: string;
}
