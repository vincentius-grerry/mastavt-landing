import { render, screen } from '@testing-library/react';
import RootLayout, { metadata } from '../app/layout';
import { AppConfig } from '@/utils/AppConfig';

describe('RootLayout and Metadata', () => {
  
  it('should have the correct metadata defined from AppConfig', () => {
    expect(metadata.title.default).toBe(AppConfig.title);
    expect(metadata.description).toBe(AppConfig.description);
    expect(metadata.openGraph.siteName).toBe(AppConfig.site_name);
  });

  it('should have a title template for sub-pages', () => {
    expect(metadata.title.template).toBe(`%s | ${AppConfig.site_name}`);
  });

  it('renders the children correctly inside the layout', () => {
    render(
      <RootLayout>
        <div data-testid="child-content">Hello World</div>
      </RootLayout>
    );

    const child = screen.getByTestId('child-content');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Hello World');
  });
});