/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { EventLog } from "./EventLog";
import { EventLogCountArgs } from "./EventLogCountArgs";
import { EventLogFindManyArgs } from "./EventLogFindManyArgs";
import { EventLogFindUniqueArgs } from "./EventLogFindUniqueArgs";
import { CreateEventLogArgs } from "./CreateEventLogArgs";
import { UpdateEventLogArgs } from "./UpdateEventLogArgs";
import { DeleteEventLogArgs } from "./DeleteEventLogArgs";
import { UserActivity } from "../../userActivity/base/UserActivity";
import { EventLogService } from "../eventLog.service";
@graphql.Resolver(() => EventLog)
export class EventLogResolverBase {
  constructor(protected readonly service: EventLogService) {}

  async _eventLogsMeta(
    @graphql.Args() args: EventLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EventLog])
  async eventLogs(
    @graphql.Args() args: EventLogFindManyArgs
  ): Promise<EventLog[]> {
    return this.service.eventLogs(args);
  }

  @graphql.Query(() => EventLog, { nullable: true })
  async eventLog(
    @graphql.Args() args: EventLogFindUniqueArgs
  ): Promise<EventLog | null> {
    const result = await this.service.eventLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EventLog)
  async createEventLog(
    @graphql.Args() args: CreateEventLogArgs
  ): Promise<EventLog> {
    return await this.service.createEventLog({
      ...args,
      data: {
        ...args.data,

        userActivity: args.data.userActivity
          ? {
              connect: args.data.userActivity,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => EventLog)
  async updateEventLog(
    @graphql.Args() args: UpdateEventLogArgs
  ): Promise<EventLog | null> {
    try {
      return await this.service.updateEventLog({
        ...args,
        data: {
          ...args.data,

          userActivity: args.data.userActivity
            ? {
                connect: args.data.userActivity,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => EventLog)
  async deleteEventLog(
    @graphql.Args() args: DeleteEventLogArgs
  ): Promise<EventLog | null> {
    try {
      return await this.service.deleteEventLog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => UserActivity, {
    nullable: true,
    name: "userActivity",
  })
  async getUserActivity(
    @graphql.Parent() parent: EventLog
  ): Promise<UserActivity | null> {
    const result = await this.service.getUserActivity(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
