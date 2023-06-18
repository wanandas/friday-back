import {
  IsNotEmpty,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'DateComparison', async: false })
export class DateComparisonConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const joinDate = args.object['joinDate'];
    return value ? value > joinDate : true;
  }

  defaultMessage() {
    return 'Leave date must be later than the join date.';
  }
}

export class CreateExpDto {
  @IsNotEmpty()
  readonly position: string;

  @IsNotEmpty()
  readonly joinDate: Date;

  @Validate(DateComparisonConstraint, {
    message: 'Leave date must be later than the join date.',
  })
  readonly leaveDate: Date;

  @IsNotEmpty()
  readonly companyName: string;

  @IsNotEmpty()
  readonly description: string[];

  readonly technologies: string[];
}
