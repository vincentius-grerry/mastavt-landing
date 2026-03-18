import { render, screen } from '@testing-library/react';
import Services from '../components/Services';

describe('Services Component Integration', () => {
  it('renders all 6 service titles directly from InfoCard', () => {
    render(<Services />);

    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();

    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Website Maintenance')).toBeInTheDocument();
    expect(screen.getByText('Web Promotion')).toBeInTheDocument();
    expect(screen.getByText('Social Media Management')).toBeInTheDocument();
    expect(screen.getByText('Google & Facebook Ads')).toBeInTheDocument();
    expect(screen.getByText('Follower Social Media')).toBeInTheDocument();
  });

  it('renders the descriptions correctly', () => {
    render(<Services />);
    
    const desc = screen.getByText(/Services for creating company profile websites/i);
    expect(desc).toBeInTheDocument();
  });
});