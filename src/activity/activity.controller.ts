
import { Controller, Get } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './entity/activity.entity';

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  async getActivities(): Promise<Activity[]> {
    return this.activityService.getAllActivities();
  }
}


