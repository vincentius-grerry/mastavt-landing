import { render, screen } from '@testing-library/react';
import InfoCard from '../components/InfoCard';

describe('InfoCard Component', () => {
  const mockData = {
    title: 'Web Development',
    description: 'Building modern web apps.',
  };

  it('renders the title and description correctly', () => {
    render(<InfoCard title={mockData.title} description={mockData.description} />);

    const titleElement = screen.getByText(/Web Development/i);
    expect(titleElement).toBeInTheDocument();

    const descElement = screen.getByText(/Building modern web apps/i);
    expect(descElement).toBeInTheDocument();
  });
});