import styled from "styled-components"

const CategoryContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.3);
  width: 80%;

  border-radius: 15px;
  border: 5px double #2f2f2f;
  box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
`

const CategoryContentItem = styled.div`
  margin: 2%;
  margin-bottom: 3%;

  border-bottom: 1px dashed black;
`

function CategoryContent() {
  return (
    <CategoryContentContainer>
      <CategoryContentItem>
        <input type="checkbox" />
        <label>Wants to please friends</label>
      </CategoryContentItem>

      <CategoryContentItem>
        <input type="checkbox" />
        <label>Wants to be like friends</label>
      </CategoryContentItem>

      <CategoryContentItem>
        <input type="checkbox" />
        <label>More likely to agree with rules</label>
      </CategoryContentItem>

      <CategoryContentItem>
        <input type="checkbox" />
        <label>Likes to sing, dance, and act</label>
      </CategoryContentItem>

      <CategoryContentItem>
        <input type="checkbox" />
        <label>Is aware of gender</label>
      </CategoryContentItem>

      <CategoryContentItem>
        <input type="checkbox" />
        <label>Can tell what's real and what's make believe</label>
      </CategoryContentItem>

      <CategoryContentItem>
        <input type="checkbox" />
        <label>Shows more independence (for example, may visit a next-door neighbor by themselves [adult supervision is still needed])</label>
      </CategoryContentItem>

      <CategoryContentItem>
        <input type="checkbox" />
        <label>Is sometimes demanding and sometimes very cooperative</label>
      </CategoryContentItem>
    </CategoryContentContainer>
  )
}

export default CategoryContent
