import React from 'react';
import ReactDOM from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {Card,Navigation} from '../src/components/Card.js';
import { Button, Welcome } from '@storybook/react/demo';
import {Style} from '../src/Style/style.js';


storiesOf('Example',module)
  .add('Example',() =>
  <div style={Style.cardStyle} >
    <Card
          header={[]}
          imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
          subtitle={["Subtitle"]}
          subtitleStyle={Style.subtitleStyle}
          title={["Title"]}
          imageStyle={Style.imageStyle}
          cardBodyStyle={Style.cardBodyStyle}
          description={["this's a description"]}
          link={[
          { link:"#",
            description:"This's link"
          }
          ]}
          linkStyle={Style.btnStyle}
          list={[]}
          footer={[]}
          imageBot={[]}
    > </Card>
  </div>
);

storiesOf('Content types',module)
  .add('Card Title',() =>
  <div style={Style.cardStyle}>
    <Card
          header={[]}
          imageTop={[]}
          cardBodyStyle={Style.cardBodyStyle}
          subtitle={["Subtitle"]}
          subtitleStyle={Style.subtitleStyle}
          title={["Title"]}
          description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
          link={[
          {link:"#",
           description:"link"
          },
          {
            link:'#',
            description:"another link"
          }
          ]}
          list={[]}
          linkStyle={Style.linkStyle}
          footer={[]}
          imageBot={[]}
          > </Card>

  </div>
);

storiesOf('Images',module)
  .add('Image caps',() =>
  <div>
    <div style={Style.cardStyle}>
      <Card
            header={[]}
            imageStyle={Style.imageStyle}
            cardBodyStyle={Style.cardBodyStyle}
            imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
            description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
            subtitle={[]}
            title={[]}
            list={[]}
            link={[]}
            footer={[]}
            imageBot={[]}
      > </Card>
    </div>
    <div style={Style.cardStyle}>
      <Card
            header={[]}
            imageStyle={Style.imageStyle}
            cardBodyStyle={Style.cardBodyStyle}
            imageTop={[]}
            description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
            subtitle={[]}
            title={[]}
            list={[]}
            link={[]}
            footer={[]}
            imageBot={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
      > </Card>
    </div>
  </div>
  );

  storiesOf('Images',module)
    .add('Image overplays',()=>
    <div style={Style.cardStyle}>
      <Card
            header={[]}
            imageStyle={Style.imageStyle}
            cardBodyStyle={Style.cardBodyOverStyle}
            imageTop={[]}
            description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
            subtitle={[]}
            title={[]}
            list={[]}
            link={[]}
            footer={[]}
            imageBot={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
      > </Card>
    </div>
  );

  storiesOf('Content types',module)
    .add('List Group',()=>
      <div style={Style.cardStyle}>
        <Card
            header={[]}
            imageTop={[]}
            list={['Cras justo odio','Dapibus ac facilisis in','Vestibulum at eros']}
            listGroupStyle={Style.listGroupStyle}
            itemStyle={Style.listItemStyle}
            link={[]}
            subtitle={[]}
            title={[]}
            description={[]}
            footer={[]}
            imageBot={[]}
        > </Card>
      </div>
    );

  storiesOf('Content types',module)
    .add('Kitchen sink',()=>
      <div style={Style.cardStyle}>
        <Card
              header={[]}
              imageStyle={Style.imageStyle}
              cardBodyStyle={Style.cardBodyStyle}
              imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
              subtitle={["Subtitle"]}
              subtitleStyle={Style.subtitleStyle}
              title={["Title"]}
              description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
              list={['Cras justo odio','Dapibus ac facilisis in','Vestibulum at eros']}
              listGroupStyle={Style.listGroupStyle}
              link={[]}
              itemStyle={Style.listItemStyle}
              footer={[]}
              imageBot={[]}
        > </Card>
      </div>
  );

  storiesOf('Content types',module)
    .add('Header and footer',()=>
      <div style={Style.cardStyle}>
        <Card
              header={['Featured']}
              navItemStyle={Style.headerStyle}
              cardBodyStyle={Style.cardBodyCenterStyle}
              subtitle={["Subtitle"]}
              subtitleStyle={Style.subtitleStyle}
              title={["Title"]}
              description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
              list={[]}
              link={[]}
              imageTop={[]}
              footer={["2 days ago"]}
              footerStyle={Style.footerStyle}
              imageBot={[]}
        > </Card>
      </div>
    );

  storiesOf('Navigation',module)
    .add('Navigation',()=>
      <div style={Style.cardStyle}>
        <Navigation
          head0="sub1"
          head1="sub2"
          head2="sub3"
          title0="Title 1"
          title1="Title 2"
          title2="Title 3"
          subtitle0="Subtitle 1"
          subtitle1="Subtitle 2"
          subtitle2="Subtitle 3"
          description0="description 1"
          description1="description 2"
          description2="description 3"
        ></Navigation>
      </div>
    );

      storiesOf('Text Align',module)
        .add('Text Align',() =>
          <div>
            <div style={Style.cardStyle}>
              <Card
                  header={[]}
                  imageTop={[]}
                  subtitle={["Subtitle"]}
                  subtitleStyle={Style.subtitleStyle}
                  title={["Title"]}
                  imageStyle={Style.imageStyle}
                  cardBodyStyle={Style.cardBodyStyle}
                  description={["this's a description"]}
                  link={[
                    {link:"#",
                      description:"This's link"
                    }
                  ]}
                  linkStyle={Style.btnStyle}
                  list={[]}
                  footer={[]}
                  imageBot={[]}
              > </Card>
          </div>
          <div style={Style.cardStyle}>
            <Card
                header={[]}
                imageTop={[]}
                subtitle={["Subtitle"]}
                subtitleStyle={Style.subtitleStyle}
                title={["Title"]}
                imageStyle={Style.imageStyle}
                cardBodyStyle={Style.cardBodyCenterStyle}
                description={["this's a description"]}
                link={[
                  {link:"#",
                    description:"This's link"
                  }
                ]}
                linkStyle={Style.btnStyle}
                list={[]}
                footer={[]}
                imageBot={[]}
            > </Card>
            </div>
            <div style={Style.cardStyle}>
              <Card
                  header={[]}
                  imageTop={[]}
                  subtitle={["Subtitle"]}
                  subtitleStyle={Style.subtitleStyle}
                  title={["Title"]}
                  imageStyle={Style.imageStyle}
                  cardBodyStyle={Style.cardBodyRightStyle}
                  description={["this's a description"]}
                  link={[
                    {link:"#",
                      description:"This's link"
                    }
                  ]}
                  linkStyle={Style.btnStyle}
                  list={[]}
                  footer={[]}
                  imageBot={[]}
              > </Card>
              </div>
        </div>
    );

    storiesOf('Card Style',module)
      .add('Background Color',()=>
        <div>
        <div style={{...Style.cardStyle,...Style.dangerBackground}}>
            <Card
                header={['Featured']}
                navItemStyle={Style.headerStyle}
                cardBodyStyle={Style.cardBodyCenterStyle}
                title={["Title"]}
                description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                list={[]}
                link={[]}
                imageTop={[]}
                footer={[]}
                imageBot={[]}
                subtitle={[]}
            > </Card>
          </div>
          <div style={{...Style.cardStyle,...Style.primaryBackground}}>
              <Card
                  header={['Featured']}
                  navItemStyle={Style.headerStyle}
                  cardBodyStyle={Style.cardBodyCenterStyle}
                  title={["Title"]}
                  description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                  list={[]}
                  link={[]}
                  imageTop={[]}
                  footer={[]}
                  imageBot={[]}
                  subtitle={[]}
              > </Card>
          </div>
            <div style={{...Style.cardStyle,...Style.secondaryBackground}}>
                <Card
                    header={['Featured']}
                    navItemStyle={Style.headerStyle}
                    cardBodyStyle={Style.cardBodyCenterStyle}
                    title={["Title"]}
                    description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                    list={[]}
                    link={[]}
                    imageTop={[]}
                    footer={[]}
                    imageBot={[]}
                    subtitle={[]}
                > </Card>
              </div>
              <div style={{...Style.cardStyle,...Style.lightBackground}}>
                  <Card
                      header={['Featured']}
                      navItemStyle={Style.headerStyle}
                      subtitle={[]}
                      cardBodyStyle={Style.cardBodyCenterStyle}
                      title={["Title"]}
                      description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                      list={[]}
                      link={[]}
                      imageTop={[]}
                      footer={[]}
                      imageBot={[]}
                  > </Card>
                </div>
        </div>
    );

  storiesOf('Card Style',module)
    .add('Border',()=>
      <div>
      <div style={{...Style.cardStyle,...Style.primaryBorder}}>
          <Card
              header={['Featured']}
              navItemStyle={Style.headerStyle}
              subtitle={[]}
              cardBodyStyle={Style.cardBodyCenterStyle}
              title={["Title"]}
              description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
              list={[]}
              link={[]}
              imageTop={[]}
              footer={[]}
              imageBot={[]}
          > </Card>
        </div>
        <br/>
        <div style={{...Style.cardStyle,...Style.dangerBorder}}>
            <Card
                header={['Featured']}
                navItemStyle={Style.headerStyle}
                subtitle={[]}
                cardBodyStyle={Style.cardBodyCenterStyle}
                title={["Title"]}
                description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                list={[]}
                link={[]}
                imageTop={[]}
                footer={[]}
                imageBot={[]}
            > </Card>
          </div>
          <br/>
          <div style={{...Style.cardStyle,...Style.successBorder}}>
              <Card
                  header={['Featured']}
                  navItemStyle={Style.headerStyle}
                  subtitle={[]}
                  cardBodyStyle={Style.cardBodyCenterStyle}
                  title={["Title"]}
                  description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                  list={[]}
                  link={[]}
                  imageTop={[]}
                  footer={[]}
                  imageBot={[]}
              > </Card>
            </div>
            <br/>
            <div style={{...Style.cardStyle,...Style.secondaryBorder}}>
                <Card
                    header={['Featured']}
                    navItemStyle={Style.headerStyle}
                    subtitle={[]}
                    cardBodyStyle={Style.cardBodyCenterStyle}
                    title={["Title"]}
                    description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                    list={[]}
                    link={[]}
                    imageTop={[]}
                    footer={[]}
                    imageBot={[]}
                > </Card>
              </div>
      </div>
    );

    storiesOf('Card Style',module)
      .add('Mixins utilities',()=>
        <div>
        <div style={{...Style.cardStyle,...Style.successBorder}}>
            <Card
                header={['Featured']}
                navItemStyle={Style.headerSuccessStyle}
                subtitle={[]}
                cardBodyStyle={Style.cardBodyCenterStyle}
                title={["Title"]}
                description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                list={[]}
                link={[]}
                imageTop={[]}
                footer={['Since 2017']}
                footerStyle={Style.footerSuccessStyle}
                imageBot={[]}
            > </Card>
          </div>
        </div>
    );

    storiesOf('Card layout',module)
      .add('Card groups',()=>
        <div style={Style.layout} >
          <div style={Style.cardStyle}>
            <Card
                  header={[]}
                  imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
                  subtitle={["Subtitle"]}
                  subtitleStyle={Style.subtitleStyle}
                  title={["Title"]}
                  imageStyle={Style.imageStyle}
                  cardBodyStyle={Style.cardBodyStyle}
                  description={["this's a description"]}
                  link={[
                    {link:"#",
                     description:"This's link"
                    }
                  ]}
                  linkStyle={Style.btnStyle}
                  list={[]}
                  footer={[]}
                  imageBot={[]}
                  > </Card>
          </div>
          <div style={Style.cardStyle}>
            <Card
                  header={[]}
                  imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
                  subtitle={["Subtitle"]}
                  subtitleStyle={Style.subtitleStyle}
                  title={["Title"]}
                  imageStyle={Style.imageStyle}
                  cardBodyStyle={Style.cardBodyStyle}
                  description={["this's a description"]}
                  link={[
                    {link:"#",
                     description:"This's link"
                    }
                  ]}
                  linkStyle={Style.btnStyle}
                  list={[]}
                  footer={[]}
                  imageBot={[]}
                  > </Card>
          </div>
          <div style={Style.cardStyle}>
            <Card
                  header={[]}
                  imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
                  subtitle={["Subtitle"]}
                  subtitleStyle={Style.subtitleStyle}
                  title={["Title"]}
                  imageStyle={Style.imageStyle}
                  cardBodyStyle={Style.cardBodyStyle}
                  description={["this's a description"]}
                  link={[
                    {link:"#",
                     description:"This's link"
                    }
                  ]}
                  linkStyle={Style.btnStyle}
                  list={[]}
                  footer={[]}
                  imageBot={[]}
                  > </Card>
          </div>

      </div>
    );

    storiesOf('Card layout',module)
      .add('Card desks',()=>
        <div style={Style.layout}>
          <div style={{...Style.cardStyle,...Style.layoutDesks}}>
            <Card
                  header={[]}
                  imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
                  subtitle={["Subtitle"]}
                  subtitleStyle={Style.subtitleStyle}
                  title={["Title"]}
                  imageStyle={Style.imageStyle}
                  cardBodyStyle={Style.cardBodyStyle}
                  description={["this's a description"]}
                  link={[
                    {link:"#",
                     description:"This's link"
                    }
                  ]}
                  linkStyle={Style.btnStyle}
                  list={[]}
                  footer={[]}
                  imageBot={[]}
                  > </Card>
          </div>
          <br />
          <div style={{...Style.cardStyle,...Style.layoutDesks}}>
            <Card
                  header={[]}
                  imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
                  subtitle={["Subtitle"]}
                  subtitleStyle={Style.subtitleStyle}
                  title={["Title"]}
                  imageStyle={Style.imageStyle}
                  cardBodyStyle={Style.cardBodyStyle}
                  description={["this's a description"]}
                  link={[
                    {link:"#",
                     description:"This's link"
                    }
                  ]}
                  linkStyle={Style.btnStyle}
                  list={[]}
                  footer={[]}
                  imageBot={[]}
                  > </Card>
          </div>
          <br />
            <div style={{...Style.cardStyle,...Style.layoutDesks}}>
            <Card
                  header={[]}
                  imageTop={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
                  subtitle={["Subtitle"]}
                  subtitleStyle={Style.subtitleStyle}
                  title={["Title"]}
                  imageStyle={Style.imageStyle}
                  cardBodyStyle={Style.cardBodyStyle}
                  description={["this's a description"]}
                  link={[
                    {link:"#",
                     description:"This's link"
                    }
                  ]}
                  linkStyle={Style.btnStyle}
                  list={[]}
                  footer={[]}
                  imageBot={[]}
                  > </Card>
          </div>
        </div>
    );
