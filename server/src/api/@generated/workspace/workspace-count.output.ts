import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkspaceCount {

    @Field(() => Int, {nullable:false})
    WorkspaceMember?: number;

    @Field(() => Int, {nullable:false})
    companies?: number;

    @Field(() => Int, {nullable:false})
    people?: number;
}
