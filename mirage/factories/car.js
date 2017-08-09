import { Factory , faker} from 'ember-cli-mirage';

faker.seed(123);

export default Factory.extend({
  brand() {
    return faker.company.companyName();
  }
});
