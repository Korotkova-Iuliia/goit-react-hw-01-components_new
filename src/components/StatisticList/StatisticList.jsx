import StatisticItem from '../Statistic/Statistic';
import { Section, Title, StatList, Item } from './StatisticList.styled';

function StatisticList({ title, items }) {
  return (
    <Section>
      {title && <Title className="title">{title}</Title>}

      <StatList className="stat-list">
        {items.map(item => (
          <Item key={item.id} className="item">
            <StatisticItem label={item.label} percentage={item.percentage} />
          </Item>
        ))}
      </StatList>
    </Section>
  );
}
export default StatisticList;
/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>; */
