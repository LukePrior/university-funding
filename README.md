# University Funding

This repository contains a JSON file with the funding breakdown for various domestic university course fees since 2009.

The files contains a list of objects where each object is a unique funding course containing the yearly amount ($) of Commonwealth Contributions (CC) and Maximum Student Contributions (MSC) for a full-time student.

This funding only applies to Commonwealth Supported Places (CSP) which are only available to domestic students.

## Example

```json
{
  "Title" :"Computer Science",
  "Narrow":"Computer Science",
  "Broad" :"Information Technology",
  "Discipline":20100,
  "2023 MSC":8301,
  "2023 CC" :13836,
  "2022 MSC":8021,
  "2022 CC" :13369,
  "2021 MSC":7950,
  "2021 CC" :13250,
  "2020 MSC":9527,
  "2020 CC" :10821,
  "2019 MSC":9359,
  "2019 CC" :10630,
  "2018 MSC":9185,
  "2018 CC" :10432,
  "2017 MSC":9050,
  "2017 CC" :10278,
  "2016 MSC":8917,
  "2016 CC" :10127,
  "2015 MSC":8768,
  "2015 CC" :9958,
  "2014 MSC":8613,
  "2014 CC" :9782,
  "2013 MSC":8363,
  "2013 CC" :9498,
  "2012 MSC":8050,
  "2012 CC" :9142,
  "2011 MSC":7756,
  "2011 CC" :8808,
  "2010 MSC":7567,
  "2010 CC" :8670,
  "2009 MSC":7412,
  "2009 CC" :8389
}
```

## Upfront

The Maximum Student Contributions have historically been reduced if payment is made upfront instead of being deffered via a HECS-HELP loan, the difference is paid by an equal increase in the Commonwealth Contributions. 

- 2009 (20%)
- 2010 (20%)
- 2011 (20%)
- 2012 (10%)
- 2013 (10%)
- 2014 (10%)
- 2015 (10%)
- 2016 (10%)
- 2017 (0%)
- 2018 (0%)
- 2019 (0%)
- 2020 (0%)
- 2021 (10%)
- 2022 (10%)
- 2023 (0%)

## Sources

The data was taken directly from documents produced by the Australian Department of Education.

https://www.dese.gov.au/higher-education-loan-program/approved-hep-information/funding-clusters-and-indexed-rates
