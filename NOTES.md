Notes from Steve

I split site up into three parts
  1) Homepage with a list of companies
  2) Info page for each company
    - This page has a separate component `EditCompanyEmployeeAmount` that lets us alter the amount
      of employees within that scope. I have a comment in there about persisting to memory.
  3) Edit page for each company

### Styling
I wanted to prioritize the logic and completing all tasks that were listed. I managed to get into Bulma 
towards the end of the sprint, but if I had more time I'd like to learn more about it and refactor
most of my tags to use Bulma instead. Currently its a bit of a hybrid.

### Testing
I was hoping to get to write some tests, but since I didn't, I just wanted to mention here that I would
like to have tests for making sure each CompanyItem gets rendered with the correct data, and also some
tests that relate to validating and dealing with security on the edit form.

