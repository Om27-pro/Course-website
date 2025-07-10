import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';

const videoData = [
  {
    id: 1,
    title: "CLAT Mock Test",
    thumbnail: "https://img.youtube.com/vi/cQ7iRdvwuJ4/0.jpg",
    url: "https://www.youtube.com/embed/cQ7iRdvwuJ4"
  },
  {
    id: 2,
    title: "Logical Reasoning",
    thumbnail: "https://img.youtube.com/vi/zboGUVKJqdE/0.jpg",
    url: "https://www.youtube.com/embed/zboGUVKJqdE"
  },
  {
    id: 3,
    title: "English for CLAT",
    thumbnail: "https://img.youtube.com/vi/G_ovPL_CiBc/0.jpg",
    url: "https://www.youtube.com/embed/G_ovPL_CiBc"
  }
];



function VideoSection() {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpen = (video) => {
    setActiveVideo(video);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setActiveVideo(null);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">🎥 Demo Classes</h2>
        <Row className="g-4">
          {videoData.map((video) => (
            <Col md={4} key={video.id}>
              <Card
                onClick={() => handleOpen(video)}
                className="h-100 shadow-sm"
                style={{ cursor: 'pointer' }}
              >
                <Card.Img variant="top" src={video.thumbnail} />
                <Card.Body>
                  <Card.Title>{video.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{activeVideo?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              {activeVideo && (
                <iframe
                  src={activeVideo.url}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default VideoSection;
