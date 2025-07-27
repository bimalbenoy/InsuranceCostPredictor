from django.db import models



class Insurance(models.Model):
    # Constants
    MALE = 1
    FEMALE = 0

    SEX_CHOICES = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    )

    REGION_CHOICES = (
        (0, 'Southeast'),
        (1, 'Southwest'),
        (2, 'Northeast'),
        (3, 'Northwest'),
    )

    SMOKER_CHOICES = (
        (0, 'Smoker'),
        (1, 'Non-Smoker'),
    )

    # Model fields
    age = models.FloatField()
    sex = models.IntegerField(choices=SEX_CHOICES)
    bmi = models.FloatField()
    children = models.FloatField()
    smoker = models.IntegerField(choices=SMOKER_CHOICES)
    region = models.IntegerField(choices=REGION_CHOICES)

    def __str__(self):
        return f"Insurance Record: Age {self.age}, Sex {self.get_sex_display()}, Charges TBD"
