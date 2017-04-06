import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App)
  });

  // it('shows the correct test', () => {
  //   const component = renderComponent(App);
  //   expect(component).to.contain('React simple starter');
  // });

  it('shows the comment box', () => {
    expect(component.find('.comment-box')).to.exist
  });

  it('shows a comment list', () =>{
    expect(component.find('.comment-list')).to.exist;
  });

});
