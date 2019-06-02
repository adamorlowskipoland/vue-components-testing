import { mount, shallowMount } from '@vue/test-utils';
import TestComponent from '@/test';
import List from '@/list';

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'Test prop value'
    }
  });
  expect(wrapper.html()).toMatchSnapshot()
});

test('ListComponent Shallow', () => {
  console.log(mount(List).html());
  console.log(shallowMount(List).html());
});
