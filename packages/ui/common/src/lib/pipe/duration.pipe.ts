import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure: true,
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(from: string | Date, to: string | Date, short?: boolean): string {
    try {
      const fromTime = new Date(from).getTime();
      const toTime = new Date(to).getTime();
      const diff = toTime - fromTime;
      const diffInSeconds = Math.ceil(diff / 1000);
      if (diffInSeconds < 60) {
        return $localize`${diffInSeconds}${short ? 's' : ' seconds'}`;
      }
      const diffInMinutes = Math.ceil(diffInSeconds / 60);
      if (diffInMinutes < 60) {
        return $localize`${diffInMinutes}${short ? 'm' : ' minutes'}`;
      }
      const diffInHours = Math.ceil(diffInMinutes / 60);
      return $localize`${diffInHours}${short ? 'h' : ' hours'}`;
    } catch (ex) {
      console.error(ex);
      return '';
    }
  }
}
